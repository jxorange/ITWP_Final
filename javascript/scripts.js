// Add scroll event listener to window - 添加滾動事件監聽到窗口
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    // Get the navbar - 獲取導航欄
    var navbar = document.getElementById("navbar");

    // Set the background and color change offset - 設置背景和顏色變化偏移量
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

// Load the smooth scroll functionality when the document is fully loaded - 文檔完全加載時加載平滑滾動功能
document.addEventListener('DOMContentLoaded', function() {
    var exploreBtn = document.querySelector('.btn[href="#news"]');
    exploreBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior - 阻止默認鏈接行為
      var newsSection = document.getElementById('news'); // Get the news section element - 獲取新聞部分元素
      newsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the news section - 平滑滾動到新聞部分
    });
});

// Function to open a modal - 打開模態框的函數
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close a modal - 關閉模態框的函數
function closeModal() {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
    }
}

// Initialize all sliders - 初始化所有滑塊
function initializeSliders() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
      let slides = slider.querySelectorAll('.slides img');
      let currentSlide = 0;
      slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none';
      });
      const prevButton = slider.querySelector('.slide-btn.left');
      const nextButton = slider.querySelector('.slide-btn.right');
      prevButton.addEventListener('click', () => {
        changeSlide(slider, slides, currentSlide -= 1);
      });
      nextButton.addEventListener('click', () => {
        changeSlide(slider, slides, currentSlide += 1);
      });
    });
}

// Change the current slide - 更改當前幻燈片
function changeSlide(slider, slides, newSlide) {
    if (newSlide >= slides.length) newSlide = 0;
    if (newSlide < 0) newSlide = slides.length - 1;
    let currentSlide = newSlide;
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}

// Initialize sliders on document load - 在文檔加載時初始化滑塊
document.addEventListener('DOMContentLoaded', initializeSliders);

// Toggle step content in the festivals section - 切換節日部分的步驟內容
function toggleStep(stepNumber) {
    var contentId = "step" + stepNumber + "-content";
    var content = document.getElementById(contentId);
    var allContents = document.querySelectorAll('.step-content');
    allContents.forEach(function (el) {
        el.style.display = 'none';
        el.previousElementSibling.querySelector('.step-number').classList.remove('active');
        el.previousElementSibling.querySelector('.step-title').classList.remove('active');
    });
    if (content.style.display === 'none') {
        content.style.display = 'block';
        content.previousElementSibling.querySelector('.step-number').classList.add('active');
        content.previousElementSibling.querySelector('.step-title').classList.add('active');
    } else {
        content.style.display = 'none';
    }
}

// Load more news items - 加載更多新聞項目
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('more-news-btn').addEventListener('click', function() {
        var hiddenItems = document.querySelectorAll('.news-item.hidden');
        hiddenItems.forEach(function(item, index) {
            if (index < 4) { 
                item.classList.remove('hidden');
            }
        });
        if (hiddenItems.length <= 4) {
            this.style.display = 'none';
        }
    });
    var newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(function(item, index) {
        if (index < 4) { 
            item.classList.remove('hidden');
        }
    });
});
