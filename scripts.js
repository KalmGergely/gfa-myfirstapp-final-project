let dataOne = {
    photo: 'images/1.jpg',
    imgTitle: 'Chameleon',
    imgDescription: 'One of my favorite animals'
};

let dataTwo = {
    photo: 'images/2.jpg',
    imgTitle: 'Anteater',
    imgDescription: 'One of my favorite animals'
};

let dataThree = {
    photo: 'images/3.jpg',
    imgTitle: 'Owl',
    imgDescription: 'One of my favorite animals'
};

let dataFour = {
    photo: 'images/4.jpg',
    imgTitle: 'Viper',
    imgDescription: 'One of my favorite animals'
};

let dataFive = {
    photo: 'images/5.jpg',
    imgTitle: 'Fox',
    imgDescription: 'One of my favorite animals'
};

let dataSix = {
    photo: 'images/6.jpg',
    imgTitle: 'Praying mantis',
    imgDescription: 'One of my favorite animals'
};

let dataSeven = {
    photo: 'images/7.jpg',
    imgTitle: 'Frog',
    imgDescription: 'One of my favorite animals'
};

let dataEight = {
    photo: 'images/8.jpg',
    imgTitle: 'Sloth',
    imgDescription: 'One of my favorite animals'
};

let currentPhoto = 0;
let photos = [dataOne, dataTwo, dataThree, dataFour, dataFive, dataSix, dataSeven, dataEight];


let loadPhoto = (photoNum) => {
    $('#bigImg').css('background', `url(${photos[photoNum].photo})`);
    $('#bigImg').css('background-size', 'cover');
    $('#bigImg').css('background-position', 'center');
    $('#imgTitle').text(photos[photoNum].imgTitle);
    $('#imgDescription').text(photos[photoNum].imgDescription);
    $('.tnImg').each((index, element) => {
        if (index == photoNum) {
            $(element).parent().addClass('selected');
            $(element).prev().addClass('visible');
        } else {
            $(element).parent().removeClass('selected');
            $(element).prev().removeClass('visible');
        }
    })
}
photos.forEach((item, index) => {
    $('#tnContainer').append(`
        <div class="tn">
            <div class="triangle"></div>
            <img class="tnImg" src=${item.photo} data-num=${index}>
            <p class="hover" id=${index}>${item.imgTitle}</p>
        </div>
    `)
    $('.tn').click((event) => {
        currentPhoto = $(event.target).attr('data-num');
        loadPhoto(currentPhoto);
    }) 
})

loadPhoto(currentPhoto);


$('#forward').click(() => {
    if (currentPhoto < 7) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    }
})

$('#back').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 7;
        loadPhoto(currentPhoto);
    }
})

