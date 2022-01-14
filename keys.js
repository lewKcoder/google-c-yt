//API KEY - https://developers.google.com/custom-search/v1/using_rest
export const API_KEY = 'AIzaSyD-jCWAAS8QHqxKo31k5X6kwQ-AJPlj1uU';

//CONTEXT KEY - https://cse.google.com/cse/create/new
// Get code -> <script async src="https://cse.google.com/csr.js?cx=fr98u439jrfowfjwoe"></script>
//             <div class="gcss-search"></div>                             ↑context_key
export const CONTEXT_KEY = '313f55222e0320cb7';

// 「Custom Search APIを使ってGoogle検索結果を取得する」
// https://qiita.com/zak_y/items/42ca0f1ea14f7046108c
// googleの検索エンジンを使ってただカスタムを作成するだけだとwww.google.co.jpサイト内でしか検索してくれず想定している検索結果を得られないため
// 検索エンジンの編集で「検索するサイト」からwww.google.jpを削除して「ウェブ全体を検索」をオンにする
