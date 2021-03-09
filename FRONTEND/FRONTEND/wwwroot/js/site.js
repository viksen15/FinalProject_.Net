// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function callToken() {
    var data = {
        "Email": "InventoryAdmin@abc.com",
        "Password": "$admin@2017"
    };

    // FUNCIONA
    $.ajax({
        method: "POST",
        url: "https://localhost:44311/api/Token",
        dataType: "json",
        data: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            localStorage.setItem("token", response);

            getTrabajadores(response);

            getUnidadesOrganizativas(response);
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function showDetails(e) {
    localStorage.setItem("id", this.dataItem($(e.currentTarget).closest("tr")).id);
    document.getElementById("fichaTrabajador").submit();
}

function getTrabajadores(token) {
    // FUNCIONA

    $.ajax({
        method: "GET",
        url: "https://localhost:44311/api/Trabajadores",
        dataType: "json",
        headers: {

            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (trabajadores) {
            $.ajax({
                method: "GET",
                url: "https://localhost:44311/api/Empresas",
                dataType: "json",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                contentType: 'application/x-www-form-urlencoded',
                success: function (empresas) {
                    $.ajax({
                        method: "GET",
                        url: "https://localhost:44311/api/Categorias",
                        dataType: "json",
                        headers: {

                            'Accept': 'application/json',
                            'Authorization': 'Bearer ' + token
                        },
                        contentType: 'application/x-www-form-urlencoded',

                        success: function (categorias) {
                            $.ajax({
                                method: "GET",
                                url: "https://localhost:44311/api/Cuerpos",
                                dataType: "json",
                                headers: {

                                    'Accept': 'application/json',
                                    'Authorization': 'Bearer ' + token
                                },
                                contentType: 'application/x-www-form-urlencoded',

                                success: function (cuerpos) {
                                    $.ajax({
                                        method: "GET",
                                        url: "https://localhost:44311/api/TProvis",
                                        dataType: "json",
                                        headers: {

                                            'Accept': 'application/json',
                                            'Authorization': 'Bearer ' + token
                                        },
                                        contentType: 'application/x-www-form-urlencoded',
                                        success: function (tprovis) {

                                            $.ajax({
                                                method: "GET",
                                                url: "https://localhost:44311/api/NivOrgs",
                                                dataType: "json",
                                                headers: {

                                                    'Accept': 'application/json',
                                                    'Authorization': 'Bearer ' + token
                                                },
                                                contentType: 'application/x-www-form-urlencoded',
                                                success: function (nivOrgs) {
                                                    var data = [];
                                                    $.each(trabajadores, function (key, val) {
                                                        $.each(empresas, function (keyEmpresa, valEmpresa) {
                                                            if (val.idEmpresa == valEmpresa.idEmpresa) {
                                                                $.each(categorias, function (keyCategoria, valCategoria) {
                                                                    if (val.idCategoria == valCategoria.categori) {
                                                                        $.each(cuerpos, function (keyCuerpos, valCuerpos) {
                                                                            if (val.cuerpo == valCuerpos.cuerpo) {
                                                                                $.each(tprovis, function (keyTprovis, valTprovis) {
                                                                                    if (val.tProvis == valTprovis.tProvis1) {
                                                                                        $.each(nivOrgs, function (keyNivOrgs, valNivOrgs) {
                                                                                            if (val.nivOrgId == valNivOrgs.id) {
                                                                                                data.push({
                                                                                                    id: val.id,
                                                                                                    nombre: val.nombre + " " + val.apellido1 + " " + val.apellido2,
                                                                                                    tp: valTprovis.idClasePer,
                                                                                                    tprovis: valTprovis.descrip,
                                                                                                    empresa: valEmpresa.dEmpresa,
                                                                                                    grupo: val.grupo,
                                                                                                    categoria: valCategoria.descrip,
                                                                                                    cuerpo: valCuerpos.descrip,
                                                                                                    nivel: valNivOrgs.dNivel
                                                                                                });
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    });

                                                    var gridDataSource = new kendo.data.DataSource({
                                                        data: data,
                                                        schema: {
                                                            model: {
                                                                fields: {
                                                                    id: { type: "int" },
                                                                    nombre: { type: "string" },
                                                                    tp: { type: "string" },
                                                                    tprovis: { type: "string" },
                                                                    empresa: { type: "string" },
                                                                    grupo: { type: "string" },
                                                                    cuerpo: { type: "string" },
                                                                    categoria: { type: "string" },
                                                                    nivel: { type: "string" }
                                                                }
                                                            }
                                                        },
                                                        pageSize: 17,
                                                        sort: {
                                                            field: "id",
                                                            dir: "asc"
                                                        }
                                                    });

                                                    $("#trabajadoresGrid").kendoGrid({
                                                        dataSource: gridDataSource,
                                                        height: 700,
                                                        scrollable: true,
                                                        pageable: true,
                                                        sortable: true,
                                                        filterable: true,
                                                        columns: [{
                                                            field: "id",
                                                            title: "Cod.",
                                                            width: 80
                                                        }, {
                                                            field: "nombre",
                                                            title: "Nombre",
                                                            width: 120,
                                                        }, {
                                                            field: "tp",
                                                            title: "TP",
                                                            width: 50,
                                                        }, {
                                                            field: "tprovis",
                                                            title: "Tipo de Empleado",
                                                            width: 150,
                                                        }, {
                                                            field: "empresa",
                                                            title: "Empresa",
                                                            width: 100,
                                                        }, {
                                                            field: "grupo",
                                                            title: "Grupo",
                                                            width: 60,
                                                        }, {
                                                            field: "cuerpo",
                                                            title: "Cuerpo",
                                                            width: 80,
                                                        }, {
                                                            field: "categoria",
                                                            title: "Categoria / Escala",
                                                            width: 80,
                                                        }, {
                                                            field: "nivel",
                                                            title: "Unidad organizativa",
                                                            width: 80
                                                        }, {
                                                            command: [
                                                                { text: 'Ficha', click: showDetails, iconClass: 'fa fa-edit', className: 'btn-grid' },
                                                                { text: 'Eliminar', iconClass: 'fa fa-trash', className: 'btn-grid-delete' }
                                                            ],
                                                            title: "Opciones",
                                                            width: 120,
                                                        }]
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
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getUnidadesOrganizativas(token) {
    $.ajax({
        method: "GET",
        url: "https://localhost:44311/api/NivOrgs",
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            var unidades = [];
            for (let unidad of data) {
                if (unidades.indexOf(unidad.dNivel) === -1) {
                    let element = `
                        <li>
                            ${unidad.dNivel}
                        </li>
                    `;

                    $('.table-filter').append(element);

                    unidades.push(unidad.dNivel);
                }
            }

            $('.table-filter li').click(function () {
                var filter = $(this).text().trim();

                var grid = $("#trabajadoresGrid").data("kendoGrid");

                grid.dataSource.filter({ field: "nivel", operator: "eq", value: filter });

            });
        }
    });
}

$(function () {
    setInterval(function () {
        var fecha = new Date();
        var formato = (fecha.getDay() < 10) ? ("0" + fecha.getDay() + "/") : (fecha.getDay() + "/");
        formato += (fecha.getMonth() < 10) ? "0" + (fecha.getMonth() + 1) + "/" : (fecha.getMonth() + "/");
        formato += fecha.getFullYear() + " - ";

        formato += (fecha.getHours() < 10) ? ("0" + fecha.getHours() + ":") : (fecha.getHours() + ":");
        formato += (fecha.getMinutes() < 10) ? ("0" + fecha.getMinutes() + ":") : (fecha.getMinutes() + ":");
        formato += (fecha.getSeconds() < 10) ? ("0" + fecha.getSeconds()) : (fecha.getSeconds());

        $('#reloj').text(formato);

    }, 1000);
    
});
