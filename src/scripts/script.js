// Nav
const $navBtn = document.querySelector('.nav__button');
const $navList = document.querySelector('.nav__gnb--mobile');

// Image Dom
const $elemImage = document.querySelector('.article__part1');
const $elemParent = document.querySelector('.article__part2 .header');

const $elemTexts = $elemParent.children;

const $title = $elemTexts[0];
const $description = $elemTexts[1];

// Event
const $hyperlink = document.querySelectorAll('a[href="#"]');
const $elemsBtn = document.querySelectorAll('.button__container button');

window.onload = function(){
    // Image Name
    const devices = ['desktop', 'mobile']
    const parseData = JSON.parse(JSON.stringify(Params));

    const $hamburger = document.getElementById('hamburger');
    const $close = document.getElementById('close');

    let NAV_BUTTON_CLICK_LOGIC = false;
    console.log(parseData);
    let page = 0;
    let timer;
    const TOTAL_PAGE = 3;
    // 링크 방지
    $hyperlink.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
        })
    });


    // Next, Prev Button
    $elemsBtn.forEach(item => {
       item.addEventListener('click', function(e)
       {
           this.name = item.lastElementChild.getAttribute('alt');

           console.log(this.name);

           // page
           if(this.name === "Left")
           {
                page = page <= 0 ? TOTAL_PAGE-1 : page-1;
           }
           else if(this.name === 'Right')
           {
                page = page >= TOTAL_PAGE - 1 ? 0 : page+1;
           }

           console.log(page);
           pageCheck();
       });
    });

    // Nav Check
    $navBtn.addEventListener('click',function(){
        navCheck();
    });

    function pageCheck()
    {
        let device;
        $title.innerHTML = `${parseData.data[page].title}`
        $description.innerHTML = `${parseData.data[page].desc}`
        if(window.innerWidth <= 1000)
        {
            device = devices[1];
        }
        else
        {
            device = devices[0];
        }
        $elemImage.style.backgroundImage = `url(src/images/${device}${parseData.data[page].image})`;
    }

    function navCheck()
    {
        console.log($hamburger);
        if(NAV_BUTTON_CLICK_LOGIC)
        {
            $hamburger.style.display = "none";
            $close.style.display = "block";
            $navList.classList.remove('nav__gnb--none');
        }
        else
        {
            $close.style.display = "none";
            $hamburger.style.display = "block";
            $navList.classList.add('nav__gnb--none');
        }

        NAV_BUTTON_CLICK_LOGIC = !NAV_BUTTON_CLICK_LOGIC;
    }
    navCheck();
    window.addEventListener('resize', function(e){
        if (timer)
        {
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            pageCheck();
        }, 500);
    });
}