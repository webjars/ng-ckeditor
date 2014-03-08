requirejs.config({
    paths: { "ng-ckeditor": webjars.path("ng-ckeditor", "ng-ckeditor") },
    shim: { "ng-ckeditor": [ "angular", "ckeditor" ] }
});
