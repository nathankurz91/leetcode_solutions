// Dev: Nathan Kurz
// Dev: jasonhey93 - https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/discuss/449948/Java-100-time-100-space-solution
// This solution was written by jasonhey93, I am just using it for analysis purposes and to learn. Thank you jasonhey93
// I like the Jason broke this up to have an evaluateWinner function. I love when I see people making their code more orthoganal
// even if its just for an algorithm problem.
class FindTicTacToeWinner {
    public String tictactoe(int[][] moves) {
        // This logic basically just sets the board for analysis 
        int[][] board = new int[3][3]; // array to symbolize the board
        boolean isATurn = true; // to track whose turn it is
        for (int[] move : moves) { // for each move in moves, move is an array itself
            board[move[0]][move[1]] = isATurn? 1 : 2; // if its A's turn, set a 1 to the board in the position of move, otherwise a 2
            isATurn = !isATurn; // if its alphas turn, make it bravos
        }
        int winner = evaluateWinner(board); // here is the logic that actually evalutates the board
        if (winner == 0)
            return moves.length == 9? "Draw" : "Pending";
        return winner == 1? "A" : "B";
    }
    
    // an initial loop to check the board for both players
    // three nested loops to check for rows, columns and diagonals
    public int evaluateWinner(int[][] board) {
        int player;
        for (player = 1; player < 3; player ++) {
            // check rows
            for (int i = 0; i < 3; i++) {
                if (board[i][0] == player && board[i][1] == player && board[i][2] == player)
                    return player;
            }

            // check columns
            for (int i = 0; i < 3; i++) {
                if (board[0][i] == player && board[1][i] == player && board[2][i] == player)
                    return player;
            }

            // check diagonal
            if (board[1][1] == player) {
                if (board[0][0] == player && board[2][2] == player || board[0][2] == player && board[2][0] == player)
                    return player;
            }
        }
        
        return 0;
    }
}