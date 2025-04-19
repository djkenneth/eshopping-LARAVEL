<?php
$title = "E-Shopping Management System";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        :root {
            --primary-gradient: linear-gradient(90deg, #0a4275 0%, #dc3545 100%);
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8f9fa;
        }

        .header {
            text-align: center;
            padding: 2rem 0;
            margin-bottom: 2rem;
        }

        .card {
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
            overflow: hidden;
            height: 100%;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card-header {
            background: var(--primary-gradient);
            height: 8px;
            padding: 0;
        }

        .card-img-container {
            padding: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .card-img {
            max-width: 150px;
            max-height: 150px;
        }

        .btn-access {
            background: var(--primary-gradient);
            color: white;
            border: none;
        }

        .btn-access:hover {
            opacity: 0.9;
            color: white;
        }

        .footer {
            margin-top: 3rem;
            padding: 1.5rem 0;
            text-align: center;
            font-size: 0.9rem;
            color: #6c757d;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1><?php echo $title; ?></h1>
        </div>

        <div class="row g-4">
            <!-- UAC Card -->
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header"></div>
                    <div class="card-img-container">
                        <svg class="card-img" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#ff7700" d="M160,100 C160,133.137 133.137,160 100,160 C66.8629,160 40,133.137 40,100 C40,66.8629 66.8629,40 100,40 C133.137,40 160,66.8629 160,100 Z"></path>
                            <circle cx="100" cy="90" r="20" fill="#ffffff"></circle>
                            <path d="M100,120 C80,120 65,135 65,155 L135,155 C135,135 120,120 100,120 Z" fill="#ffffff"></path>
                            <path d="M155,95 C155,115 135,125 120,125 L120,115 C130,115 140,110 140,95 C140,80 130,75 120,75 L120,65 C140,65 155,75 155,95 Z" fill="#ffffff" fill-opacity="0.5"></path>
                            <path d="M45,95 C45,115 65,125 80,125 L80,115 C70,115 60,110 60,95 C60,80 70,75 80,75 L80,65 C60,65 45,75 45,95 Z" fill="#ffffff" fill-opacity="0.5"></path>
                        </svg>
                    </div>
                    <div class="card-body text-center">
                        <h3 class="card-title">User Access Control</h3>
                        <p class="card-text text-muted">Security & Authentication</p>
                        <p class="card-text">Manage system access and user permissions</p>
                    </div>
                    <div class="card-footer bg-transparent border-0 text-center pb-4">
                        <a href="/UAC" class="btn btn-access btn-lg px-4">Access System</a>
                    </div>
                </div>
            </div>

            <!-- PRODUCTS Card -->
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header"></div>
                    <div class="card-img-container">
                        <svg class="card-img" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <rect x="40" y="40" width="120" height="120" rx="10" fill="#ff7700"></rect>
                            <rect x="60" y="60" width="80" height="20" rx="5" fill="#ffffff"></rect>
                            <rect x="60" y="90" width="80" height="20" rx="5" fill="#ffffff"></rect>
                            <rect x="60" y="120" width="40" height="20" rx="5" fill="#ffffff"></rect>
                            <circle cx="130" cy="130" r="15" stroke="#ffffff" stroke-width="4" fill="none"></circle>
                            <line x1="142" y1="142" x2="155" y2="155" stroke="#ffffff" stroke-width="4" stroke-linecap="round"></line>
                        </svg>
                    </div>
                    <div class="card-body text-center">
                        <h3 class="card-title">PRODUCTS</h3>
                        <p class="card-text text-muted">Inventory & Catalog Management</p>
                        <p class="card-text">Add, edit, and manage your product catalog</p>
                    </div>
                    <div class="card-footer bg-transparent border-0 text-center pb-4">
                        <a href="/PRODUCTS" class="btn btn-access btn-lg px-4">Access System</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <p>&copy; <?php echo date('Y'); ?> E-Shopping Management System</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>