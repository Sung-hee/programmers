def solution(people, tshirts)

  answer = 0

  for i in 0 ... people.length
    for j in i ... tshirts.length
      if people[i]^tshirts[j] == 0
        answer = answer + 1
      end

      if answer != 0
        if j + 1 > tshirts.length - 1
          break
        else
          if people[i]^tshirts[j] == 0
            answer = answer + 1
          end
        end
      end
    end
  end
  puts answer

  return answer
end

solution([1,3,3], [1,2,3])
