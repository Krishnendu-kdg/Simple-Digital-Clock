let clock_display_hours=document.getElementsByClassName("clock-display1-hours")[0];
      let clock_display_mins=document.getElementsByClassName("clock-display1-minutes")[0];
      let clock_display_dots=document.getElementsByClassName("clock-display1-dots")[0];
      let heading=document.getElementsByClassName('heading')[0];

      var t= new Date();
      function blink(){
          if(clock_display_dots.style.visibility=="collapse")
            clock_display_dots.style.visibility="visible"
          else
          clock_display_dots.style.visibility="collapse"
      }


      function updateTime()
      {
          let mins2='',hours2=''
          hours=new Date().getHours();
          mins=new Date().getMinutes();
          if(parseInt(mins)<10)
          {
              mins2+='0'+mins
          }
          else
          {
              mins2=mins
          }
          if(parseInt(hours)<10)
          {
              hours2+='0'+hours
          }
          else
          {
              hours2=hours;
          }
          clock_display_hours.innerText=hours2;
          clock_display_mins.innerText=mins2;
      }


      function blink_head()
      {
        if(heading.style.color=="green")
        {
            heading.style.color="orange"
        }
            
        else
        {
            heading.style.color="green"
        }
            
      }

      updateTime();
      setInterval(blink,500)
      setInterval(updateTime,1000);
      setInterval(blink_head,300)