Build.paths.main = '../js/';
Build('demo.Main', ['demo.inheritance.Child'], function ($define, $super) {
    $define({
        $constructor: function Main() {
            this.child = new demo.inheritance.Child();
        }
    });
});
Build(function () {
    window.main = new demo.Main();
    console.log(main.child);
});
