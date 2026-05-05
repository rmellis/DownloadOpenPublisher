document.addEventListener("DOMContentLoaded", function() {
    const tears = document.querySelectorAll('.paper-tear');
    
    tears.forEach(function(paper) {
        const paperWidth = paper.offsetWidth + 200; 
        const interval = 1; 
        const isBottom = paper.classList.contains('tear-bottom');
        
        let lastOffset = 0;
        let offsetTop = 0;
        let weight = 2;
        
        const fragment = document.createDocumentFragment();

        for (let i = -200; i < paperWidth; i = i + interval) {
            const deg = Math.floor(Math.random() * 101) - 20;
            const width = Math.floor(Math.random() * 101) + 20;
            const height = Math.floor(Math.random() * 10) + 20;
            
            let flip = Math.random() * weight;
            flip = (Math.floor(flip) === 0);
            
            if (flip) {
                offsetTop = offsetTop + 10;
                weight = weight + 1;
            } else {
                offsetTop = offsetTop - 10;
                weight = weight - 1;
            }

            const line = document.createElement('div');
            line.className = 'line';
            line.style.left = i + 'px';
            line.style.height = height + 'px';
            line.style.width = width + 'px';
            
            if (isBottom) {
                line.style.bottom = (height / 2) + 'px';
                line.style.transform = `rotate(${deg}deg) translate(0, ${-offsetTop}px)`;
                line.style.transformOrigin = 'center top';
            } else {
                line.style.top = (height / 2) + 'px';
                line.style.transform = `rotate(${deg}deg) translate(0, ${offsetTop}px)`;
                line.style.transformOrigin = 'center bottom';
            }
            
            fragment.appendChild(line);
            lastOffset = Math.abs(offsetTop);
        }
        
        paper.appendChild(fragment);
    });
});