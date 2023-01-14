<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ajax-Jquery Bootstrap PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="js/jquery.js"></script>
    <script src="js/App.js" defer></script>
</head>

<body>

    <div class="container ">
        <div class="row mt-5">
            <h1>Ajax-Jquery Bootstrap PHP</h1>
        </div>
        <div class="row">
            <div class="col-4">
                <button type="button" id="btn-add" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    ADD DATA
                </button>
            </div>
        </div>
        <div class="row mt-4">
            <!-- <div class="col">
                <div class="row">
                    <h2>Data Input</h2>
                </div>
                <div class="row">
                    <div id="msg"></div>

                </div>
            </div> -->
            <div class="col">
                <div class="row">
                    <h2>DATA</h2>
                </div>
                <div class="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Pelanggan</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">Telp</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody id="isidata">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Button trigger modal -->


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="title">ADD DATA</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <input type="text" hidden class="form-control" id="id" required aria-describedby="emailHelp">

                                <label for="exampleInputEmail1" class="form-label">Nama Pelanggan</label>
                                <input type="text" class="form-control" id="pelanggan" required aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">Required.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Alamat</label>
                                <input type="text" class="form-control" id="alamat" required>
                                <div id="emailHelp" class="form-text">Required.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Telp</label>
                                <input type="text" class="form-control" id="telp" required>
                                <div id="emailHelp" class="form-text">Required.</div>
                            </div>
                            <button type="submit" id="submit" data-bs-dismiss="modal" class="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>

</html>