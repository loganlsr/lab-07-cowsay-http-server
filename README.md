This is a HTTP server that uses Cowsay to respond to GET and POST commands that are input.


To get different animals to display instead of the cow, type "f==(animal)" after your server call. You can replace (animal) with one of the following:

beavis.zen,  bong,  bud-frogs,  bunny,  cheese,  cower,  daemon,  default,  doge,  dragon-and-cow,  dragon,  elephant-in-snake,  elephant,  eyes,  flaming-sheep,  ghostbusters,  goat,  head-in,  hedgehog,  hellokitty,  kiss,  kitty,  koala,  kosh,  luke-koala,  mech-and-cow,  meow,  milk,  moofasa,  moose,  mutilated,  ren,  satanic,  sheep,  skeleton,  small, squirrel,  stegosaurus,  stimpy,  supermilker,  surgery,  telebears,  turkey,  turtle,  tux,  vader-koala,  vader

This project requires httpie. To get httpie, run the following command in your terminal: brew install httpie


Here is what should print to your terminal when run correctly:

HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: text/plain
Date: Wed, 21 Sep 2016 15:34:39 GMT
Transfer-Encoding: chunked

 ____
< hi >
 ----
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
