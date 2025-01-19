import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null); // Create a reference to the canvas element
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    var starCount = 500;

    let toggle = JSON.parse(localStorage.getItem('force')) || false; 

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var spin = 0;
    let isThrottled = false; 
    
     
    const stars = [];

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 0.001 * Math.max(visualViewport.height,visualViewport.width) + 1;
        this.speed = Math.random() * 2 + 0.03;
        this.opacity = Math.random() +0.1;
        this.startingRed =Math.random() * 255
        this.startingGreen =Math.random() * 255
        this.startingBlue =Math.random() * 255
        
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.startingRed}, ${this.startingGreen}, ${this.startingBlue}, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
          this.speed =Math.random() +0.1;
          this.starCount = visualViewport.width * 0.5;
          this.size = Math.random() * 3
        }
      }
    }

    

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.draw();
        star.update();
      });
      requestAnimationFrame(animate);
    };

    animate();
    // Resize canvas when window size changes
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });


    window.addEventListener('mousemove', (event) =>{
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        toggle = JSON.parse(localStorage.getItem('force')) || false; 
        stars.forEach(star => {
            const distance = Math.sqrt(Math.pow(mouseX -star.x,2) +   Math.pow(mouseY- star.y,2));
          if(distance < Math.min(visualViewport.height,visualViewport.width)/6){
            if (!toggle) {
                const angle = Math.atan2(star.y - mouseY, star.x - mouseX); 
                star.x +=  Math.cos(angle) * (0.003 * visualViewport.width) * 2; 
                star.y += Math.sin(angle) * (0.003 * visualViewport.width) * 2;
            }else{
              const angle = Math.atan2(star.y - mouseY, star.x - mouseX); 
                star.x -=  Math.cos(angle) * (0.003 * visualViewport.width) * 2; 
                star.y -= Math.sin(angle) * (0.003 * visualViewport.width) * 2;
                star.size +=0.01
                star.speed +=0.01
            }
          }
        });
    })
    window.addEventListener('mouseup', (event) =>{
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        stars.forEach(star => {
            const distance = Math.sqrt(Math.pow(mouseX -star.x,2) +   Math.pow(mouseY- star.y,2));
    
            if (distance < 150) {
                const angle = Math.atan2(star.y - mouseY, star.x - mouseX); 
                star.x +=  Math.cos(angle) * 20 * 5; 
                star.y += Math.sin(angle) * 20 * 5;
                star.speed += Math.random() * 2;
            }
        });
    })
    

    let isKeyPressed = false; 


    window.addEventListener("keydown", (event) => {
  if (event.key === 'h' && !isThrottled) {
    isThrottled = true;
    isKeyPressed = true;
    const maxDistance = visualViewport.width;
    const bandWidth = Math.min(visualViewport.height,visualViewport.width)/6; 
    const scatterFactor = 0.5; 

    stars.forEach(star => {
      
      const distance = Math.sqrt(
        Math.pow((visualViewport.width * 0.5) - star.x, 2) +
        Math.pow((visualViewport.height * 0.5) - star.y, 2)
      );
      const angle = Math.atan2(
        star.y - (visualViewport.height * 0.5),
        star.x - (visualViewport.width * 0.5)
      );

       

      let radius;

      if (distance < bandWidth) {
        radius = bandWidth * scatterFactor * Math.random(); // Band 1
      } else if (distance < bandWidth * 2) {
        radius = bandWidth + (bandWidth * scatterFactor * Math.random()); // Band 2
      } else if (distance < bandWidth * 3) {
        radius = (bandWidth * 2) + (bandWidth * scatterFactor * Math.random()); // Band 3
      } else if (distance < bandWidth * 4) {
        radius = (bandWidth * 3) + (bandWidth * scatterFactor * Math.random()); // Band 4
      } else {
        radius = (bandWidth * 4) + (bandWidth * scatterFactor * Math.random()); // Band 5
      }


      star.x = (visualViewport.width * 0.5) + Math.cos(angle + spin) * radius;
      star.y = (visualViewport.height * 0.5) + Math.sin(angle + spin) * radius; 
      star.size =  (Math.min(visualViewport.height,visualViewport.width) * 0.3) / (distance + 5);
      star.speed = 0;
      spin += 1 / distance;
    });


    setTimeout(() => {
      isThrottled = false;
    }, 3); 
  }else if (event.key == 't' && !event.repeat) {
    toggle = !toggle;
    localStorage.setItem('force', JSON.stringify(toggle)); 
  }
});

    
     window.addEventListener("keyup", (event) => {if(event.repeat){}
     if(event.key == 'h'){
      isKeyPressed = false;
     stars.forEach(star => {  
       const angle = Math.atan2(star.y - (visualViewport.height * 0.5), star.x - (visualViewport.width * 0.5));
       const finalXDist = Math.random() * visualViewport.height 
      const finalYDist = Math.random() * visualViewport.height
      
      
        setTimeout(()=>{
          star.x += Math.cos(angle) * (finalXDist); 
          star.y += Math.sin(angle) * (finalYDist) ;
          star.speed = Math.random() + 1
        },30)
      
     
  });
  }
});
        



    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <canvas className="animate-image-hue-shift"ref={canvasRef}></canvas>;
};

export default Background;
