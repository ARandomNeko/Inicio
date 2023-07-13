<!-- src/routes/[slug]/+page.svelte -->
<script>
    export let data;
  </script>
  
  <article class="flex-col justify-content-center p-12 dynamic-padding">
    
    <p style="font-size: 2vw;"><b>{data.date}</p>
      <h1>{data.title }</h1>
      <p style="font-size: 2vw;">By: {data.author}</p>
      <br>
    <svelte:component this={data.content}/>
  </article>