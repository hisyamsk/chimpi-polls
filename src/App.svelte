<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";

  //tabs
  let items = ["Current Polls", "Add a New Poll"];
  let activeItem = "Current Polls";

  let polls = [
    {
      id: 1,
      question: "React or Svelte?",
      answerA: "React",
      answerB: "Svelte",
      votesA: 9,
      votesB: 13,
    },
  ];

  const switchTab = (e) => {
    activeItem = e.detail;
  };

  const handleAddPoll = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = "Current Polls";
  };

  const handleVote = (e) => {
    const { id, option } = e.detail;

    let copiedPolls = [...polls];
    let updatedPoll = copiedPolls.find((poll) => poll.id == id);

    if (option === "a") {
      updatedPoll.votesA++;
    }

    if (option === "b") {
      updatedPoll.votesB++;
    }

    polls = copiedPolls;
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:switchTab={switchTab} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
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
