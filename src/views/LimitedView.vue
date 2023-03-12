<template>
  <div class="limited">
    <div class="content">
      <h1>期間限定公開ページ</h1>
      <p>この機会をお見逃しなく！</p>
      <p>記事コード：{{ aid }}</p>
    </div>
  </div>
</template>

<script>
let timeGuard = function (to, from, next) {
  let data = {
    108: new Date(2023, 2, 12),
  };

  let limit = data[to.params.aid] ? data[to.params.aid] : new Date(2099, 12, 31);

  let current = new Date();

  if (limit && limit.getTime() > current.getTime()) {
    next();
  } else {
    window.alert("記事の公開は終了しました。");
    next(false);
  }
};

export default {
  name: "LimitedView",
  beforeRouteEnter: timeGuard,
  beforeRouteUpdate: timeGuard,
  props: {
    aid: String,
  },
};
</script>
