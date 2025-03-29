`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 19.01.2025 23:56:45
// Design Name: 
// Module Name: transaction
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

class transaction;
  
  rand bit [3:0] a;
  rand bit [3:0] b;
  rand bit [3:0] c;
  rand bit [3:0] d;
  rand bit [1:0] sel;
       bit [3:0] y;
       
   function void display(string name);
   $display("----------------------------------------");
   $display("\t a = %0h, \t b = %0h, \t c = %0h, \t d = %0h",a,b,c,d);
   $display("\t sel = %0h, \t y = %0h",sel,y);
   $display("----------------------------------------");
   endfunction   
       
endclass
     