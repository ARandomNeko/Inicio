<!-- src/routes/[slug]/+page.svelte -->
<script>
    export let data;
  </script>
  
  <article class="flex-col justify-content-center p-12">
    
    <p><b>{data.date}</p>
      <h1>{data.title }</h1>
      <p>By: {data.author}</p>
    <svelte:component this={data.content} />
  </article>