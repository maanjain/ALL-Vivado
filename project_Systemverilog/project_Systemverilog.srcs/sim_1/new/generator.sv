`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 19.01.2025 23:54:46
// Design Name: 
// Module Name: generator
// Project Name: 
// Target Devices: 
// Tool Versions: 
// Description: 
// 
// Dependencies: 
// 
// Revision:
// Revision 0.01 - File Created
// Additional Comments:
// 
//////////////////////////////////////////////////////////////////////////////////


class generator;
  
  rand transaction trans;
  mailbox gen2driv;
  int repeat_count;
  event ended;
  
  function new(mailbox gen2driv,event ended);
    this.gen2driv = gen2driv;
    this.ended = ended;
  endfunction
  
  task main;
    repeat(repeat_count) begin
      trans = new();
      if(!trans.randomize()) $fatal("Randomization Failed");
        gen2driv.put(trans);
      end
      -> ended;
    endtask
    
  endclass
