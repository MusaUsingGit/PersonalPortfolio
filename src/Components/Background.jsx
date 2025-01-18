import React, { useEffect, useRef } from 'react';


const Background = () => {
  const canvasRef = useRef(null); // Create a reference to the canvas element

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    var starCount = visualViewport.width * 2;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    
    const stars = [];

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
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
          this.size = Math.random() * 2 + 1;
          this.speed =Math.random() +0.1;
          this.starCount = visualViewport.width;
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

        stars.forEach(star => {
            const distance = Math.sqrt(Math.pow(mouseX -star.x,2) +   Math.pow(mouseY- star.y,2));
    
            if (distance < 100) {
                const angle = Math.atan2(star.y - mouseY, star.x - mouseX); 
                star.x +=  Math.cos(angle) *  Math.log10(star.size) * 50; 
                star.y += Math.sin(angle) *  Math.log10(star.size) * 50;
            }
        });
    })
    window.addEventListener('mouseup', (event) =>{ 
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        stars.forEach(star => {
            const distance = Math.sqrt(Math.pow(mouseX -star.x,2) +   Math.pow(mouseY- star.y,2));
    
            if (distance < 250) {
                const angle = Math.atan2(star.y - mouseY, star.x - mouseX); 
                const force = Math.random() * (distance /2 - (-1*distance)) - (distance/5) ;
                star.x += Math.cos(angle) * force; 
                star.y += Math.sin(angle) * force ;
                star.speed += Math.random() + 1
            }
        });
    })

    window.addEventListener("keydown", (event) => {if(event.repeat){return}
      if(event.key === 'o'){
      stars.forEach(star => {
        
        const distance = Math.sqrt(Math.pow((visualViewport.width * 0.5) -star.x,2) +   Math.pow((visualViewport.height * 0.5)- star.y,2));
        const angle = Math.atan2(star.y - (visualViewport.height * 0.5), star.x - (visualViewport.width * 0.5)); 
        const force = 50 - distance;
          star.x += Math.cos(angle) * force; 
          star.y += Math.sin(angle) * force;
        star.speed = 0; 
    });
    }
    });
    window.addEventListener("keyup", (event) => {if(event.repeat){return}
      if(event.key === 'o'){


      stars.forEach(star => {  
        const angle = Math.atan2(star.y - (visualViewport.height * 0.5), star.x - (visualViewport.width * 0.5));
        const finalXDist = Math.random() * visualViewport.height 
        const finalYDist = Math.random() * visualViewport.height - 100
        
        for(var i=0; i<3;i++){
          setTimeout(()=>{
            star.x += Math.cos(angle) * (finalXDist/3); 
            star.y += Math.sin(angle) * (finalYDist/3) ;
            star.speed += Math.random() + 1
          },0.2)
        }
       
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
