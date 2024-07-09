<template>
<div class="container-fluid bg-secondary mb-5">
    <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
        <h1 class="font-weight-semi-bold text-uppercase mb-3">Register</h1>
        <div class="d-inline-flex">
            <p class="m-0"><a href="">Home</a></p>
            <p class="m-0 px-2">-</p>
            <p class="m-0">Login</p>
        </div>
    </div>
</div>
<body>
    <div class="card">
        <div class="card-body">
            
            <div class="card-title text-center" style="color: black; font-size: 18px;">
                HAZTE MIEMBRO
            </div>
            <form>
                <div class="form-group mb-3">
                    <label for="formBasicName" style="color: black; font-size: 14px;">Nombre</label>
                    <input type="text" class="form-control" id="formBasicName" placeholder="Nombre" name="name">
                </div>

                <div class="form-group mb-3">
                    <label for="formBasicEmail" style="color: black; font-size: 14px;">Correo electrónico</label>
                    <input type="email" class="form-control" id="formBasicEmail" placeholder="Correo" name="email">
                </div>

                <div class="form-group mb-3">
                    <label for="formBasicPassword" style="color: black; font-size: 14px;">Contraseña</label>
                    <input type="password" class="form-control" id="formBasicPassword" placeholder="Contraseña" name="password">
                </div>

                <div class="form-group mb-3">
                    <label for="formBasicConfirmPassword" style="color: black; font-size: 14px;">Confirmar contraseña</label>
                    <input type="password" class="form-control" id="formBasicConfirmPassword" placeholder="Contraseña" name="c_password">
                </div>

                <button type="submit" class="btn btn-dark" style="width: 100%;">Únete</button>

                <div class="card-text" style="margin: 5px; color: black; font-size: 14px;">
                    ¿Ya eres miembro?
                    <a href="/login" class="card-link" style="margin-left: 5px; color: black; font-size: 14px;">Iniciar sesión</a>
                </div>
            </form>
        </div>
    </div>
</body>

</template>
<style scoped>
        .card {
            width: 30rem;
            margin-top: 25px;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        .text-center {
            text-align: center;
        }
        .mb-3 {
            margin-bottom: 1rem;
        }
        .form-control {
            display: block;
            width: 100%;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        .btn {
            display: inline-block;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        .btn-dark {
            color: #fff;
            background-color: #343a40;
            border-color: #343a40;
        }
        .card-link {
            color: #343a40;
            text-decoration: none;
        }
        .card-link:hover {
            text-decoration: underline;
        }
    </style>