window.onload = () => {
    var checkbox = document.querySelector( '#checkbox_changer' );

    checkbox.addEventListener( 'click', () => {
        document.body.classList.toggle( 'dark_mode' );

        if ( document.body.classList.contains( 'dark_mode' ) ) {
            localStorage.setItem( 'website_theme', 'dark_mode' );
            checkbox.checked = true;
        } else {
            localStorage.setItem( 'website_theme', 'default' );
            checkbox.checked = false;
        }
    } );

    function retrieve_theme () {
        var theme = localStorage.getItem( 'website_theme' );
        if ( theme != null ) {
            document.body.classList.remove( 'default', 'dark_mode' );
            document.body.classList.add( theme );
            if ( document.body.classList.contains( 'dark_mode' ) ) {
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }
        }
    }

    retrieve_theme();

    window.addEventListener( 'storage', () => {
        retrieve_theme();
    } );

    var nav_logo = document.querySelector( '.nav__logo' );
    var nav_menu = document.querySelector( '.nav__menu' );
    var main = document.querySelector( '.main' );

    main.style.setProperty( '--menu-height', '-' + nav_menu.clientHeight + 'px' );

    nav_menu.setAttribute( "closed", "" );
    nav_logo.setAttribute( "canclick", "" );

    nav_logo.addEventListener( 'click', () => {
        if ( nav_logo.getAttribute( "canclick" ) === "" && nav_menu.getAttribute( "shown" ) === "" ) {
            nav_menu.setAttribute( "closing", "" );
            nav_menu.removeAttribute( "shown" );
            main.setAttribute( "closing", "" );
            nav_logo.removeAttribute( "canclick" );

            setTimeout( () => {
                nav_menu.removeAttribute( "closing" );
                nav_menu.setAttribute( "closed", "" );
                main.removeAttribute( "closing", "" );
                nav_logo.setAttribute( "canclick", "" );

            }, 490 )

        } else if ( nav_logo.getAttribute( "canclick" ) === "" ) {
            nav_menu.removeAttribute( "closed" );
            nav_menu.setAttribute( "opening", "" );
            main.setAttribute( "opening", "" );
            nav_logo.removeAttribute( "canclick" );

            setTimeout( () => {
                nav_menu.removeAttribute( "opening" );
                nav_menu.setAttribute( "shown", "" );
                main.removeAttribute( "opening", "" );
                nav_logo.setAttribute( "canclick", "" );

            }, 490 )
        } else {

        }
    } )
}