# Remote Control

## INSTALLATION

- Make sure that you have **v16 LTS Node** installed on your computer
- Clone or download this repo https://github.com/MaksimBashchuk/remote-control
- Open your newly created folder with code editor
- Checkout `remote-control` branch
- Type `npm i` in terminal to install all dependencies.
  > rename `.env.example` to `.env` and define ports for app to start. By default HTTP Server starting on port 3000 amd WS Server on port 8080

## USAGE

- To start application use `npm run start` script.
- Open browser and go to the httpServer address (http://localhost:3000 by default)

| Keys        | WS command     | Description                                                                     |
| :---------- | :------------- | :------------------------------------------------------------------------------ |
| ARROW_UP    | mouse_up       | Move mouse up                                                                   |
| ARROW_DOWN  | mouse_down     | Move mouse down                                                                 |
| ARROW_LEFT  | mouse_left     | Move mouse left                                                                 |
| ARROW_RIGHT | mouse_right    | Move mouse right                                                                |
| P           | mouse_position | Return mouse coordinates                                                        |
| C           | draw_circle    | Draw circle. Before using make browser window active                            |
| R           | draw_rectangle | Draw rectangle. Before using make browser window active                         |
| S           | draw_square    | Draw square. Before using make browser window active                            |
| CTRL + P    | prnt_scrn      | Print 200x200 pixels segment of screen. Before using make browser window active |
