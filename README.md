# FinalProject_.Net
Proyecto final del curso de Programación .Net (Reus) de Fundación Esplai para Grupo Castilla

#### 1. Descripción
```
API REST creada con .NET Core 3.1 utilizando varias entidades ER y conectada con base de datos 
MS Sql guardada en un servidor gratuito de somee.com
```

#### 2. Componentes del equipo
```
Viksen Senkov - Front end Developer
Joan Baza - Back end Developer
Iago Gonzalez - Back end & Front end Developer
```

#### 3. Lista con los pasos mínimos que se necesitan para clonar exitosamente el proyecto

###### Instalación
```
IDE               Visual Studio 2019 Community Version
Core              C#, HTML, CSS, JavaScript, AJAX, JQUERY
Framework         NET Core 3.1
DataBase          Microsoft Sql Server 
```
###### Paquetes nuGet 
```
System.IdentityModel.Tokens.Jwt                       -Version 5.6.0
Microsoft.AspNetCore.Authentication.JwtBearer         -Version 3.1.8
Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore  -Version 3.1.10
Microsoft.AspNetCore.Identity.EntityFrameworkCore     -Version 3.1.12
Microsoft.AspNetCore.Identity.UI                      -Version 3.1.12 
Microsoft.EntityFrameworkCore.SqlServer               -Version 3.1.12
Microsoft.EntityFrameworkCore.Tools                   -Version 3.1.12 
Microsoft.VisualStudio.Web.CodeGeneration.Design      -Version 3.1.5 
```
###### Cadena de conexión a la base de datos en los diferentes proyectos
appsettings.json (API)
```
"AllowedHosts": "*",
  "ConnectionStrings": {
    "APIDatabase": "Server=<IP>;Database=BootCampDB;User ID=<DB USER>;Password=<DB PASSWORD>"
  },
```
appsettings.json (FRONT END)
```
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=<IP>;Database=BootCampDB;User ID=<DB USER>;Password=<DB PASSWORD>"
},
```
* Sustituir los valores entre <> por los suyos *

#### 4. URL endpoints.
* Todas las rutas requiren de un Token obtenido en la ultima ruta para poder acceder.
```
Categorias
GET       /api/Categorias
GET       /api/Categorias/{id}

ClasePers
GET       /api/ClasePers
GET       /api/ClasePers/{id}

Cuerpos
GET       /api/Cuerpos
GET       /api/Cuerpos/{id}

Empresas
GET       /api/Empresas
GET       /api/Empresas/{id}

Escalas
GET       /api/Escalas
GET       /api/Escalas/{id}

Grupos
GET       /api/Grupos
GET       /api/Grupos/{id}

NivOrgs
GET       /api/NivOrgs
GET       /api/NivOrgs/{id}

Organigs
GET       /api/Organigs
GET       /api/Organigs/{id}

Poblacs
GET       /api/Poblacs
GET       /api/Poblacs/{id}

Provincias
GET       /api/Provincias
GET       /api/Provincias/{id}

Siglas
GET       /api/Siglas
GET       /api/Siglas/{id}

SitAdmvs
GET       /api/SitAdmvs
GET       /api/SitAdmvs/{id}

Subescalas
GET       /api/Subescalas
GET       /api/Subescalas/{id}

TProvis
GET       /api/TProvis
GET       /api/TProvis/{id}

Trabajadores
GET       /api/Trabajadores
POST      /api/Trabajadores
GET       /api/Trabajadores/{id}
PUT       /api/Trabajadores/{id}
DELETE    /api/Trabajadores/{id}

VNivOrgs
GET       /api/VNivOrgs
GET       /api/VNivOrgs/{id}

VTrabajadores
GET       /api/VTrabajadores
GET       /api/VTrabajadores/{id}


Token
POST      /api/Token
```
