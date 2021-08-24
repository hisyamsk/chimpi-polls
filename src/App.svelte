<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";

  //tabs
  let items = ["Current Polls", "Add a New Poll"];
  let activeItem = "Current Polls";

  const switchTab = (e) => {
    activeItem = e.detail;
  };

  const handleAddPoll = () => {
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:switchTab={switchTab} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else}
    <CreatePollForm on:addPoll={handleAddPoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
