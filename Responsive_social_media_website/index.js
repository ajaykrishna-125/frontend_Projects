// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');


const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const fontSizes = document.querySelectorAll('.lol');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
var root = document.querySelector(':root');
const colorPalatte = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// ==================== SIDEBAR =================

//remove active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}



menuItems.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications' ){
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }  
        
    })
})


// ================== MESSAGES ====================


// searches chats

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        console.log(name);
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';
        }
    })
}
// search chat
messageSearch.addEventListener('keyup', searchMessage);

//highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click',(e)=>{
    console.log(e);
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    console.log(messagesNotification.querySelector('.notification-count').style.display);
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);
})

//THEME CUSTOMIZATION


//open modal
const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}

//closes model
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//close modal
themeModal.addEventListener('click',closeThemeModal);

theme.addEventListener('click',openThemeModal);


// ======================== FONTS =====================

const changeActivefont = () => {
    fontSizes.forEach(f =>{
        f.classList.remove('active');
    })
}

fontSizes.forEach(size =>{
    size.addEventListener('click',() =>{
        let fontSize;
        changeActivefont();
        if(size.classList.contains('font-size-1')){
            size.classList.add('active');
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            size.classList.add('active');
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3')){
            size.classList.add('active');
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4')){
            size.classList.add('active');
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5')){
            size.classList.add('active');
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left','-12rem');
            root.style.setProperty('----sticky-top-right','-35rem');
        }

        //change font size of root html element
    document.querySelector('html').style.fontSize = fontSize;

    })

    

    
})

//remove active class from colors
const changeActiveColorClass = () => {
    colorPalatte.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}

//change primary colors
colorPalatte.forEach(color => {
    color.addEventListener('click',()=>{
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

//theme Background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

Bg1.addEventListener('click',()=>{
    darkColorLightness = '17%';
    whiteColorLightness = '95%';
    lightColorLightness = '100%';

    // add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg2.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})



// END
















