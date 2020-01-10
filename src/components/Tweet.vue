<script>
import TwitterWidgetsLoader from 'twitter-widgets';

export default {
  functional: true,
  props: ['item'],
  render: (createElement, context) => {
    const { item } = context.props;
    const tweetLink = item.tweetLink.value;
    const tweetID = tweetLink.match('^.*twitter.com/.*/(\\d+)/?.*$')[1];
    const id = `tweet${tweetID}`;

    TwitterWidgetsLoader.load(twitter => {
      let selectedTheme = item.theme.value.pop().codename;
      selectedTheme = selectedTheme ? selectedTheme : 'light';
      twitter.widgets.createTweet(
        tweetID,
        document.getElementById(id),
        {
          theme: selectedTheme
        }
      );
    });

    return createElement('div', {domProps: {id}});
  }
}
</script>
