// 双然信息官网 - 共享脚本
document.addEventListener('DOMContentLoaded', function () {
  // 移动端导航
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // 滚动进场动画
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // 当前年份
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // 案例 / 资讯 筛选
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var groupName = group.getAttribute('data-filter-group');
    var tabs = group.querySelectorAll('button');
    var cards = document.querySelectorAll('[data-cat="' + groupName + '"]');
    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tabs.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        cards.forEach(function (c) {
          var cat = c.getAttribute('data-value') || c.getAttribute('data-type');
          if (f === 'all' || f === cat) { c.style.display = ''; }
          else { c.style.display = 'none'; }
        });
      });
    });
  });
});
