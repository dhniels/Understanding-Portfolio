#CSS3 Transitions

Transitions allow an intermediate effect when changing a style from one property to another without having to use Flash or JavaScript.

The properties are as follows:
-transition
-transition-delay
-transition-duration
-transition-property
-transition-timing-function

Transitions are not supported by IE9 or earlier.

#CSS3 Animations

Animations can replace many of the basic and common animations created by flash and JavaScript, right within the browser! This makes pages much more lightweight, compatible, and secure.

To create an animation, you first use the @keyframes rule to change a style just like in a transition. Once the animation is created in the @keyframe rule, bind it to a selector by specifying at least these two properties:
-name
-duration

for example:
<pre><code>div {
    -webkit-animation: myfirst 5s; /* Chrome, Safari, Opera */
    animation: myfirst 5s;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes myfirst {
    from {background: red;}
    to {background: yellow;}
}

/* Standard syntax */
@keyframes myfirst {
    from {background: red;}
    to {background: yellow;}
}</code></pre>