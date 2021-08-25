<script>
  import PollDetails from "./PollDetails.svelte";
  export let polls = [];
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollDetails {poll} on:vote />
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
