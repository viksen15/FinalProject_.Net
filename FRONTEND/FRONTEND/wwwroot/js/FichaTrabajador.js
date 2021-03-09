$(function () {
    console.log(localStorage.getItem("id"));
    console.log(localStorage.getItem("token"));

    var T;

    $("#Funciones").blur(function () {
        var txt = $("#Funciones").text();
        txt.replaceAll( /\n/g, '<br>');

        T.funciones = txt;

        console.log(T);
        $.ajax({
            type: "PUT",
            url: "https://localhost:44311/api/Trabajadores/" + T.id,
            dataType: "json",
            data: JSON.stringify(T),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            contentType: 'application/json',
            error: function (error) {
                console.log(error);
            }
        });
    });

    $("#Misiones").blur(function () {

        var txt = $("#Misiones").text();
        txt.replaceAll( /\n/g, '<br>');

        T.misiones = txt;

        console.log(T);

        $.ajax({
            type: "PUT",
            url: "https://localhost:44311/api/Trabajadores/" + T.id,
            dataType: "json",
            data: JSON.stringify(T),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            contentType: 'application/json',
            error: function (error) {
                console.log(error);
            }
        });
    });

    $("#Titulaciones").blur(function () {

        var txt = $("#Titulaciones").text();
        txt.replaceAll( /\n/g, '<br>');
        
        T.titulaciones = txt;

        console.log(T);

        $.ajax({
            type: "PUT",
            url: "https://localhost:44311/api/Trabajadores/" + T.id,
            dataType: "json",
            data: JSON.stringify(T),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            contentType: 'application/json',
            error: function (error) {
                console.log(error);
            }
        });
    });

    $("#Formacion").blur(function () {

        var txt = $("#Formacion").text();
        txt.replaceAll( /\n/g, '<br>');

        T.formacion = txt;

        console.log(T);

        $.ajax({
            type: "PUT",
            url: "https://localhost:44311/api/Trabajadores/" + T.id,
            dataType: "json",
            data: JSON.stringify(T),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            contentType: 'application/json',
            error: function (error) {
                console.log(error);
            }
        });
    });

    $("#Idiomas").blur(function () {

        var txt = $("#Idiomas").text();
        txt.replaceAll( /\n/g, '<br>');

        T.idiomas = txt;

        console.log(T);

        $.ajax({
            type: "PUT",
            url: "https://localhost:44311/api/Trabajadores/" + T.id,
            dataType: "json",
            data: JSON.stringify(T),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            contentType: 'application/json',
            error: function (error) {
                console.log(error);
            }
        });
    });
 

    $.ajax({
        method: "GET",
        url: "https://localhost:44311/api/Trabajadores/" + localStorage.getItem("id"),
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (trabajador) {
            T = trabajador;

            console.log(trabajador);
            $("#fichaH2").text(trabajador.nombre + " " + trabajador.apellido1 + " " + trabajador.apellido2);
            $("#idTrabajador").text(trabajador.id);
            $("#grupo").html('<strong>Grupo profesional </strong> &emsp; &emsp; ' + trabajador.grupo + '</p>');

            $("#Funciones").text(trabajador.funciones);
            
            $("#Misiones").text(trabajador.misiones);
            $("#Titulaciones").text(trabajador.titulaciones);
            $("#Formacion").text(trabajador.formacion);
            $("#Idiomas").text(trabajador.idiomas);

            
            $.ajax({
                method: "GET",
                url: "https://localhost:44311/api/VNivOrgs/" + trabajador.nivOrgId,
                dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                contentType: 'application/x-www-form-urlencoded',
                success: function (nivOrg) {
                    if (nivOrg.dNivel == nivOrg.dNivelPadre) {
                        $("#u-org").text(nivOrg.dNivel);
                    }
                    else {
                        $("#u-org").text(nivOrg.dNivel);
                        $("#puesto").text(nivOrg.dNivelPadre);
                    }
                    console.log(nivOrg);
                },
                error: function (error) {
                    console.log(error);
                }
            });




            $.ajax({
                method: "GET",
                url: "https://localhost:44311/api/TProvis/" + trabajador.tProvis,
                dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                contentType: 'application/x-www-form-urlencoded',
                success: function (TProvis) {
                    console.log(TProvis);
                    $("#generico").text(TProvis.descrip);
                },
                error: function (error) {
                    console.log(error);
                }
            });
            
            $.ajax({
                method: "GET",
                url: "https://localhost:44311/api/Categorias/" + trabajador.idCategoria,
                dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                contentType: 'application/x-www-form-urlencoded',
                success: function (categoria) {

                    $.ajax({
                        method: "GET",
                        url: "https://localhost:44311/api/ClasePers/" + categoria.idClasePer,
                        dataType: "json",
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem("token")
                        },
                        contentType: 'application/x-www-form-urlencoded',
                        success: function (clasePers) {
                            $("#tipo").text(clasePers.dClasePer);

                        },
                        error: function (error) {
                            console.log(error);
                        }
                    });
                },
                error: function (error) {
                    console.log(error);
                }
            });

        },
        error: function (error) {
            console.log(error);
        }
    });
});


