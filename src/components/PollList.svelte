<script>
  /* import { onMount, onDestroy } from "svelte"; */
  import PollStore from "../store/PollStore";
  import PollDetails from "./PollDetails.svelte";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  /* export let polls = []; */

  /* const unsub = PollStore.subscribe((data) => { */
  /*   polls = data; */
  /* }); */

  /* onMount(() => { */
  /*   console.log("component mounted"); */
  /* }); */

  /* onDestroy(() => { */
  /*   console.log("component destroyed"); */
  /*   unsub(); */
  /* }); */
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:fade|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    text-align: center;
  }

  @media (max-width: 750px) {
    .poll-list {
      grid-template-columns: 1fr;
      padding: 0 30px;
    }
  }
</style>
