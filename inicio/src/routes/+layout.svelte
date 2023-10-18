<script>
    import "../app.css";
  </script>
 <header class=" bgimg">

  <nav class=" border-gray-200 px-4 lg:px-6  text-black  ">
      <div class=" justify-between items-center flex w-auto order-1" >
        <ul class="flex mt-4 font-medium lg:flex-row lg:space-x-8  m-auto">
            
            <li>
                <a href="/" class="block  py-2 pr-4 pl-3 text-gray-700  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 rounded-lg">Home</a>
            </li>
            <li>
                <a href="blog" class="block py-2 pr-4 pl-3 text-gray-700  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 rounded-lg">Blog</a>
            </li>

        </ul>
    </div>
    </nav>
</header>
  

  <slot />

  