<script>
import {linkedItemFactory} from 'vue-kontent-rich-text';
import HostedVideo from './HostedVideo.vue';
import Tweet from './Tweet.vue';

const selectComponent = (contentTypeCodeName) => {
  switch (contentTypeCodeName) {
  case 'hosted_video':
    return HostedVideo;
  case 'tweet':
    return Tweet;
  }
};

export default {
  functional: true,
  inject: ['getLinkedItems'],
  render: (createElement, context) => {
    const {props, injections} = context;

    const selectLinkedItemData = (itemCodeName) =>
      injections.getLinkedItems()[itemCodeName];

    const component = linkedItemFactory(selectComponent, selectLinkedItemData);
    return createElement(component, {props})
  }
}
</script>
