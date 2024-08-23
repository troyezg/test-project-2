let DeskButton = document.getElementById("main-header__button-description");
let ReviewsButton = document.getElementById("main-header__button-reviews");
let WhereButton = document.getElementById("main-header__button-where");

DeskButton.addEventListener("click", function() {
    let DeskBlock = document.getElementById("description-block");
    let ReviewsBlock = document.getElementById("reviews-block");
    let WhereBlock = document.getElementById("where-block");

    DeskBlock.className = "description-block block_active";
    ReviewsBlock.className = "reviews-block block_hidden";
    WhereBlock.className = "where-block block_hidden";

    DeskButton.className = "main-header__button button_active";
    ReviewsButton.className = "main-header__button";
    WhereButton.className = "main-header__button";
});

ReviewsButton.addEventListener("click", function() {
    let DeskBlock = document.getElementById("description-block");
    let ReviewsBlock = document.getElementById("reviews-block");
    let WhereBlock = document.getElementById("where-block");

    DeskBlock.className = "description-block block_hidden";
    ReviewsBlock.className = "reviews-block block_active";
    WhereBlock.className = "where-block block_hidden";

    DeskButton.className = "main-header__button";
    ReviewsButton.className = "main-header__button button_active";
    WhereButton.className = "main-header__button";
});

WhereButton.addEventListener("click", function() {
    let DeskBlock = document.getElementById("description-block");
    let ReviewsBlock = document.getElementById("reviews-block");
    let WhereBlock = document.getElementById("where-block");

    DeskBlock.className = "description-block block_hidden";
    ReviewsBlock.className = "reviews-block block_hidden";
    WhereBlock.className = "where-block block_active";

    DeskButton.className = "main-header__button";
    ReviewsButton.className = "main-header__button";
    WhereButton.className = "main-header__button button_active";
});