import React from 'react'

import './aboutme.css'

export default function TestTail() {
    function togglePageFlip(el){
        setAllPagesBack();
        setClickedPageForward(el);
        el.classList.toggle('turn');
     }
     
     function setAllPagesBack(){
         var pages = document.getElementsByClassName("page");
         for(var i=0; i<pages.length; i++){
             pages[i].classList.remove('z-50');
         }
     }
     
     function setClickedPageForward(el){
         el.classList.add('z-50');
     }
  return (
    <div>
    <div><h1 className=" hover:text-[200px] text-[65px] w-[80%]">TestTail</h1></div>
    <div class="perspective text-white bg-black w-screen h-screen flex justify-end">

    <div class="page absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform" data-page="2" onclick="togglePageFlip(this)">
        <div class="front text-xl sm:text-3xl md:text-5xl flex items-center justify-start px-2 sm:px-5 md:px-20 font-bold bg-gray-900 h-screen absolute right-0 w-full h-full">
            Page 3
        </div>
        <div class="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 h-screen absolute w-full h-full">
            Page 4
        </div>
    </div>

    <div class="page absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform" data-page="1" onclick="togglePageFlip(this)">
        <div class="front text-xl sm:text-3xl md:text-5xl flex flex-col items-start justify-center px-2 sm:px-5 md:px-20 font-bold bg-gray-900 h-screen absolute right-0 w-full h-full">
            Welcome to this Page
            <p class="text-sm text-gray-500">Click me to open</p>
        </div>
        <div class="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 h-screen absolute w-full h-full">
            This is Page 2
        </div>
    </div>
</div>
    </div>
  )
}
