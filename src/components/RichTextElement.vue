<template>
    <div
        @click="handleClick"
    >
        <RichText
            :content="element.value"
            :linkedItemComponent="linkedItemComponent"
        />
    </div>
</template>

<script>
import {resolveContentLink} from '../Utilities/ContentLinks'
import {RichText} from 'vue-kontent-rich-text';
import LinkedItem from './LinkedItem';

export default {
  name: 'RichTextElement',
  props: ['element'],
  components: {'RichText': RichText},
  computed: {
    linkedItemComponent: () => LinkedItem
  },
  methods: {
    handleClick: function (e) {
      if (e.target.tagName === 'A' && e.target.hasAttribute('data-item-id')) {
        e.preventDefault();

        const id = e.target.getAttribute('data-item-id');
        const link = this.element.links.find(m => m.itemId === id);

        if (link) {
          const path = resolveContentLink(link);
          const language = this.$i18n.locale;

          if (path) {
            this.$router.push(`/${language}${path}`);
          }
        }
      }
    }
  }
}
</script>
