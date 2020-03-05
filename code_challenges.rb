# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.



fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def odd_sort array
   new_arr = array.grep(Numeric)
  (new_arr.select { |value| value%2!=0 }).sort()
   
end

puts odd_sort(fullArr1)
puts odd_sort(fullArr2)

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.


class Bike
    def initialize (model, wheels = 2, frame)
        @model = model
        @wheels = wheels
        @frame = frame
    end
    
    def get_info
        puts "The #@model bike has #@wheels wheels and a #@frame cm frame"
    end
end
   
  my_bike = Bike.new("Trek", "168")
  my_bike.get_info



# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

class Bike
    def initialize (model, wheels = 2, frame)
        @model = model
        @wheels = wheels
        @frame = frame
        @bell = "off"
    end
    
    def ring_bell
        puts @bell = "Beep, beep!"
    end
end

    my_bike = Bike.new("Trek", "168")
    my_bike.ring_bell



# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

class Bike
    def initialize (model, wheels = 2, frame)
        @model = model
        @wheels = wheels
        @frame = frame
        @bell = "off"
        @speed = 0
    end
    
    def speed 
      puts "my_bike.speed => #@speed"
    end
end

 my_bike = Bike.new("Trek", "168")
 my_bike.speed



# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.


class Bike
    def initialize (model, wheels = 2, frame)
        @model = model
        @wheels = wheels
        @frame = frame
        @bell = "off"
        @speed = 0
    end
    
    def pedal_faster num
        puts @speed = @speed + num
    end
    
    def brake num
        if @speed >= num
              puts @speed = @speed - num
        else
              puts @speed = 0
        end
    end
end

    my_bike = Bike.new("Trek", "168")
    my_bike.pedal_faster 10
    my_bike.brake 15
    

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
