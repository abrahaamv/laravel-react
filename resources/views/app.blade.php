<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ secure_asset('build/assets/app-Cp6YETGy.css') }}">
    <script src="{{ secure_asset('build/assets/app-GsZkvmek.js') }}"></script>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    <title>Document</title>
</head>
<body>
    @inertia
</body>
</html>