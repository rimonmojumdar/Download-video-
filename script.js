
function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById("socialDropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function pasteLink() {
    const videoUrlInput = document.getElementById('videoUrl');
    
  
    navigator.clipboard.readText()
        .then(text => {
            videoUrlInput.value = text.trim();
        })
        .catch(err => {
            alert('ক্লিপবোর্ড অ্যাক্সেস অনুমোদিত নয়। অনুগ্রহ করে ম্যানুয়ালি লিঙ্ক পেস্ট করুন।');
        });
}


document.getElementById('downloadButton').addEventListener('click', function() {
    const url = document.getElementById('videoUrl').value.trim();
    const resultArea = document.getElementById('resultArea');
    const downloadButton = document.getElementById('downloadButton');

    if (!url) {
        resultArea.innerHTML = '<p style="color: yellow;">অনুগ্রহ করে একটি বৈধ ভিডিও লিঙ্ক দিন।</p>';
        return;
    }

    
    downloadButton.textContent = 'প্রসেস করা হচ্ছে...';
    downloadButton.disabled = true;
    resultArea.innerHTML = '<p style="color: white;">ভিডিও প্রসেসিং শুরু হয়েছে।</p>';


    setTimeout(() => {
        
        
        downloadButton.textContent = 'Download';
        downloadButton.disabled = false;
        
    
        const dummyDownloadLink = 'https://example-cdn.com/download?file=' + btoa(url).substring(0, 10) + '.mp4';

      
        resultArea.innerHTML = `
            <div style="background-color: #fff; padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: #4CAF50; font-weight: bold; margin: 0 0 10px 0;">ডাউনলোড প্রস্তুত! 🎉</p>
                <a href="${dummyDownloadLink}" download="downloaded-video.mp4" 
                   class="result-link">
                    ভিডিওটি ডাউনলোড করুন (MP4)
                </a>
            </div>
        `;
    }, 2500); 
});