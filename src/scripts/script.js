
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
    const device = ['desktop-image-hero-', 'mobile-image-hero-']
    const parseData = JSON.parse(JSON.stringify(Params));

    console.log(parseData);
    let page = 0;
    const TOTAL_PAGE = 3;
    // 링크 방지
    $hyperlink.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
        })
    });

    // 버튼
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

    function pageCheck()
    {
        $title.innerHTML = `${parseData.data[page].title}`
        $description.innerHTML = `${parseData.data[page].desc}`
        $elemImage.style.backgroundImage = `url(src/images/desktop${parseData.data[page].image})`;
    }
}