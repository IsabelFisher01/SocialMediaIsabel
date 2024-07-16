document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('artCanvas');
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const circleRadius = 150;
    const circleLineWidth = 5; // Adjust this value to change the circle's stroke width

    // Draw initial lines and circle
    drawInitialLinesAndCircle();

    function drawInitialLinesAndCircle() {
        const interval = 10;
        const numberOfLines = Math.floor(canvas.height / interval);

        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw initial lines
        for (let i = 0; i < numberOfLines; i++) {
            context.beginPath();

            // Left lines
            context.strokeStyle = "white";
            context.moveTo(0, interval * i);
            context.lineTo(interval * i, canvas.height);
            context.stroke();

            // Right lines
            context.beginPath();
            context.strokeStyle = "white";
            context.moveTo(canvas.width, interval * i);
            context.lineTo(canvas.width - interval * i, canvas.height);
            context.stroke();  

            // Left lines
            context.strokeStyle = "white";
            context.moveTo(0, canvas.height - interval * i);
            context.lineTo(interval * i, 0);
            context.stroke();

            // Right lines
            context.beginPath();
            context.strokeStyle = "white";
            context.moveTo(canvas.width, canvas.height - interval * i);
            context.lineTo(canvas.width - interval * i, 0);
            context.stroke();   
        }

        // Draw white circle with increased line width
        context.save(); // Save the current context state
        context.lineWidth = circleLineWidth; // Set the stroke width of the circle
        context.beginPath();
        context.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
        context.strokeStyle = 'white';
        context.stroke();
        context.restore(); // Restore the context state to reset the lineWidth
    }

    function generateArt() {
        const lineCount = document.getElementById('lineCount').value || 10;

        // Clear canvas and redraw initial lines and circle
        drawInitialLinesAndCircle();

        for (let i = 0; i < lineCount; i++) {
            drawRandomCurvedLine();
        }
    }

    function drawRandomCurvedLine() {
        // Generate random points inside the circle
        const startAngle = Math.random() * 2 * Math.PI;
        const endAngle = startAngle + Math.random() * Math.PI; // Ensure it doesn't complete the circle

        // Calculate start and end points
        const startX = centerX + circleRadius * Math.cos(startAngle);
        const startY = centerY + circleRadius * Math.sin(startAngle);
        const endX = centerX + circleRadius * Math.cos(endAngle);
        const endY = centerY + circleRadius * Math.sin(endAngle);

        // Generate random control points inside the circle
        const controlX1 = centerX + Math.random() * circleRadius * Math.cos(Math.random() * 2 * Math.PI);
        const controlY1 = centerY + Math.random() * circleRadius * Math.sin(Math.random() * 2 * Math.PI);
        const controlX2 = centerX + Math.random() * circleRadius * Math.cos(Math.random() * 2 * Math.PI);
        const controlY2 = centerY + Math.random() * circleRadius * Math.sin(Math.random() * 2 * Math.PI);

        // Draw the curved line
        context.beginPath();
        context.moveTo(startX, startY);
        context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
        context.strokeStyle = 'white';
        context.stroke();
    }

    window.generateArt = generateArt;
});