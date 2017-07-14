# Wikipedia Açıcı

Bu Chrome eklentisi, Türkiye'de yasaklı olan Wikipedia adreslerine girilmesini sağlar. Bir süredir bilindiği üzere eğer URL'deki `wikipedia.org` kısmı `0wikipedia.org` adresi ile değiştirilirse, ilgili sayfaya erişilebiliyordu. Bu eklenti de bu işi otomatikmen yapıyor, yalnızca `*.wikipedia.org` şemasına uyan adreslerde çalışacak şekilde tetikleniyor ve istek henüz tamamlanmadan adresi `0wikipedia.org` ile değiştiriyor. Bu sayede kullanıcı herhangi bir bölünme farketmeden istediği sayfaya erişmiş oluyor.

Script sadece şu 3 satırdan oluşmakta, `js/redirect.js` yolundaki dosyada görülebilir:

```js
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            redirectUrl: details.url.replace(".wikipedia.", ".0wikipedia.")
        };
    }, {
        urls: ["*://*.wikipedia.org/*"]
    }, ["blocking"]);
```


## License

Bu eklenti MIT Lisansı altında yayınlanmıştır. Daha detaylı bilgi için [LICENSE.md](LICENSE.md) dosyasını inceleyebilirsiniz.

------

# Wikipedia Uncensored

This is an extension that allows to overcome the censorhip on Wikipedia in Turkey. Basically, it was known that if you replace the `wikipedia.org` part in the URL with `0wikipedia.org`, you could view the page as if everything was normal. Therefore, this extension automates this operation and allows the users to browse on Wikipedia seamlessly. It basically sets a listener on URLs that satisfy the `*.wikipedia.org` schema and replaces the `.wikipedia.` section with `.0wikipedia.` and redirects the user to the new URL.

The script that powers the extension is a simple URL listener only, which can be seen in `js/redirect.js` file:

```js
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            redirectUrl: details.url.replace(".wikipedia.", ".0wikipedia.")
        };
    }, {
        urls: ["*://*.wikipedia.org/*"]
    }, ["blocking"]);
```

## License

This extension is released under the MIT Licence. For further information, see the [LICENSE.md](LICENSE.md).