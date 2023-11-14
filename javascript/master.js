const allLis = document.querySelectorAll('.portfolio .shuffle li');
const allBoxes = document.querySelectorAll('.portfolio .imgs-container .box');

allLis.forEach(el => {
    el.addEventListener('click', (lis) => {
        allLis.forEach(li => {
            li.classList.remove('active')
        })
        lis.target.classList.add('active')
    });

    // fuction to handel image section
    el.addEventListener('click', function handelimageSection(ele) {
        allBoxes.forEach(images => {
            images.style.display = 'none';
        })
        document.querySelectorAll(this.dataset.options).forEach(image => {
            image.style.display = "block";
        });
    });
});