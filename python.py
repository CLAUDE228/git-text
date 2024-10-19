import sys

def log_user(name, email):
    with open("user_log.txt", "a") as log_file:
        log_file.write(f"Nouvel utilisateur ajouté : {name}, Email : {email}\n")

if __name__ == "__main__":
    name = sys.argv[1]
    email = sys.argv[2]
    log_user(name, email)
