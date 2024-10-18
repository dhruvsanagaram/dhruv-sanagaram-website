const projects = [
    {
      logo: '/nvidia.png',
      title: 'Nvidia Project',
      description: `I developed CUDA code to optimize the forward pass of a convolutional neural network in Python, 
                    focusing on techniques like shared tiled convolution, loop unrolling, and floating-point optimizations. 
                    By deploying these improvements on an NVIDIA A100 GPU, I successfully reduced the execution time 
                    from 70 milliseconds to 26 milliseconds.`,
      image: '/cuda.png',
    },
    {
      logo: '/linux.png',
      title: 'Linux Project',
      description: 'Developed an operating system in C and x86 Assembly with device drivers for terminals, file system, and various devices. Supported interrupts, exceptions, user-level program execution, terminal switching, round-robin scheduling, and kernel synchronization. Led paper-readings and coordinated Agile GitOps workflows during ECE391 coursework.',
      image: '/os.jpg',
    },
    {
      logo: '/socialblade.png',
      title: 'Socialblade Project',
      description: 'Designed and developed a CRUD application to evaluate YouTube channel viewership and performance. Implemented REST API with Python Flask, and optimized database operations with MySQL stored procedures, triggers, and transactions. Enhanced frontend performance by 6 seconds using React.js techniques like windowing and memoization.',
      image: '/videoinsights.png',
    },
    {
      logo: '/frogger.png',
      title: 'FPGA Project',
      description: 'This is a version of Frogger(1981), a game in which the user controls a frog as it traverses a series of obstacles towards a number of gems. When it reaches the gems the frog respawns at the starting point. The obstacles include cars that move horizontally across the screen at varying speeds. When the frog reaches the vertical halfway point of the screen it will have to jump across a number of logs that are also moving horizontally across the screen. When the frog jumps on the log, it moves at its speed to emulate the idea of a frog “riding” a log. The user is given a birds eye view of the game and they can control the frog using the WASD keys which enable them to move up, left, down, and right respectively. When the frog has collected all five gems on the opposite side of the obstacles, it has won the game. ',
      image: '/froggergame.png',
    },
  ];
  
  export default projects;