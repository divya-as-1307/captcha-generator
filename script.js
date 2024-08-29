function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captcha').innerText = captcha;
}

function verifyCaptcha() {
    const input = document.getElementById('captchaInput').value.trim();
    const captcha = document.getElementById('captcha').innerText.trim();

    if (input === captcha) {
       alert('CAPTCHA Verified successfully!!')
    } else {
       alert('Caption verification failed.  Please try again')
       
    }
  
}

generateCaptcha();


