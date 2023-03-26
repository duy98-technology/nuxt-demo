<template>
  <div>
    <Tutorial />
    <h1>Parent {{ slug }}</h1>
  </div>
</template>
<script>
export default {
  name: 'ParentPage',
  layout: 'BaseLayout',
  asyncData ({ params }) {
    const slug = params.id // When calling /abc the slug will be "abc"
    return { slug }
  }

}
</script>
