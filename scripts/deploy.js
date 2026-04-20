const { execSync } = require('child_process');
const https = require('https');
const fs = require('fs');
const path = require('path');

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const REPO_URL = 'https://github.com/Ritesh00007/nextjs-ecommerce-platform';

function log(msg) {
  console.log(`[Deploy] ${msg}`);
}

function runCommand(cmd, opts = {}) {
  log(`Running: ${cmd}`);
  try {
    const output = execSync(cmd, { encoding: 'utf8', stdio: 'pipe', ...opts });
    return output.trim();
  } catch (err) {
    console.error(`Command failed: ${cmd}`);
    console.error(err.stdout || err.message);
    throw err;
  }
}

async function deployToVercel() {
  log('Starting Vercel deployment for nextjs-ecommerce-platform');
  log(`Repository: ${REPO_URL}`);

  // Check if vercel CLI is available
  try {
    runCommand('vercel --version');
    log('Vercel CLI found');
  } catch {
    log('Installing Vercel CLI...');
    runCommand('npm install -g vercel');
  }

  if (!VERCEL_TOKEN) {
    log('WARNING: VERCEL_TOKEN not set. Using interactive login.');
    log('Set VERCEL_TOKEN environment variable for non-interactive deployment.');
  }

  // Build the project first
  log('Building Next.js project...');
  runCommand('npm run build');
  log('Build successful!');

  // Deploy to Vercel
  log('Deploying to Vercel...');
  let deployCmd = 'vercel --prod --yes';
  if (VERCEL_TOKEN) {
    deployCmd += ` --token ${VERCEL_TOKEN}`;
  }

  try {
    const deployOutput = runCommand(deployCmd);
    log('Deployment output:');
    console.log(deployOutput);

    // Extract URL from output
    const urlMatch = deployOutput.match(/https:\/\/[\w-]+\.vercel\.app/);
    if (urlMatch) {
      log(`\n✅ Deployment successful!`);
      log(`🚀 Live URL: ${urlMatch[0]}`);
      return urlMatch[0];
    } else {
      log('Deployment completed. Check Vercel dashboard for URL.');
      log('Dashboard: https://vercel.com/dashboard');
    }
  } catch (err) {
    log('Deployment via CLI failed. Trying API approach...');
    if (VERCEL_TOKEN) {
      await deployViaAPI();
    } else {
      throw new Error('Deployment failed. Please set VERCEL_TOKEN and try again.');
    }
  }
}

async function deployViaAPI() {
  log('Deploying via Vercel API...');
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      name: 'nextjs-ecommerce-platform',
      gitSource: {
        type: 'github',
        repoId: 'Ritesh00007/nextjs-ecommerce-platform',
        ref: 'main',
      },
      projectSettings: {
        framework: 'nextjs',
        buildCommand: 'npm run build',
        outputDirectory: '.next',
        installCommand: 'npm install',
      },
    });

    const options = {
      hostname: 'api.vercel.com',
      path: '/v13/deployments',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${VERCEL_TOKEN}`,
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.url) {
            const deployUrl = `https://${response.url}`;
            log(`\n✅ Deployment successful!`);
            log(`🚀 Live URL: ${deployUrl}`);
            resolve(deployUrl);
          } else if (response.error) {
            log(`API Error: ${response.error.message}`);
            reject(new Error(response.error.message));
          } else {
            log('Response: ' + JSON.stringify(response, null, 2));
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

deployToVercel().catch((err) => {
  console.error('Deployment failed:', err.message);
  process.exit(1);
});
