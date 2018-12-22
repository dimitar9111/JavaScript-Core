function attachEventsListeners() {
    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', calculateDistance);

    function calculateDistance() {
        let distance = Number(document.getElementById('inputDistance').value);
        let inputUnits = document.getElementById('inputUnits').value;

        switch (inputUnits) {
            case 'km':
                distance *= 1000;
                break;
            case 'cm':
                distance *= 0.01;
                break;
            case 'mm':
                distance *= 0.001;
                break;
            case 'mi':
                distance *= 1609.34;
                break;
            case 'yrd':
                distance *= 0.9144;
                break;
            case 'ft':
                distance *= 0.3048;
                break;
            case 'in':
                distance *= 0.0254;
                break;
            default:
                break;
        }

        let outputUnits = document.getElementById('outputUnits').value;

        switch (outputUnits) {
            case 'km':
                distance /= 1000;
                break;
            case 'cm':
                distance /= 0.01;
                break;
            case 'mm':
                distance /= 0.001;
                break;
            case 'mi':
                distance /= 1609.34;
                break;
            case 'yrd':
                distance /= 0.9144;
                break;
            case 'ft':
                distance /= 0.3048;
                break;
            case 'in':
                distance /= 0.0254;
                break;
            default:
                break;
        }

        document.getElementById('outputDistance').value = distance;
    };
}
