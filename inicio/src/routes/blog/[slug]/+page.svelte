<!-- src/routes/[slug]/+page.svelte -->
<script>
    export let data;
  </script>
  
  <article class="flex-col justify-content-center p-12 dynamic-padding py-20">
    
    <p style="font-size: 2vw;"><b>{data.date}</p>
      <h2>{data.title }</h2>
      <p style="font-size: 2vw;">By: {data.author}</p>
      <br>
    <svelte:component this={data.content}/>
  </article>